import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { LineageNode } from '../types';

interface TreeVisualizationProps {
  data: LineageNode;
  onNodeSelect: (node: LineageNode) => void;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, onNodeSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    // Clear previous SVG content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 120, bottom: 20, left: 120 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create a hierarchy
    const root = d3.hierarchy(data);
    
    // Set up tree layout
    // We rotate the tree 90 degrees, so we swap height/width in the tree size
    const treeLayout = d3.tree<LineageNode>()
      .size([height, width]) 
      .separation((a, b) => (a.parent === b.parent ? 1.5 : 2.5)); // More space between branches

    treeLayout(root);

    // Zoom behavior
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom)
       .call(zoom.transform, d3.zoomIdentity.translate(margin.left, margin.top));


    // Draw Links (Curved paths)
    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal<d3.HierarchyLink<LineageNode>, d3.HierarchyNode<LineageNode>>()
        .x(d => d.y)
        .y(d => d.x) as any
      )
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.6);

    // Draw Nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", "node cursor-pointer")
      .attr("transform", d => `translate(${d.y},${d.x})`)
      .on("click", (event, d) => {
        onNodeSelect(d.data);
      });

    // Node Circles
    node.append("circle")
      .attr("r", 8)
      .attr("fill", d => d.data.color || "#9ca3af")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .on("mouseover", function() {
        d3.select(this).attr("r", 10).attr("stroke", "#fcd34d");
      })
      .on("mouseout", function() {
        d3.select(this).attr("r", 8).attr("stroke", "#fff");
      });

    // Node Labels
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.children ? -12 : 12)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name)
      .attr("class", "text-xs font-serif font-bold fill-slate-700")
      .style("font-family", "'Noto Serif SC', serif")
      .clone(true).lower() // White outline for readability
      .attr("stroke", "#fdfbf7")
      .attr("stroke-width", 3);

    node.append("text")
      .attr("dy", "1.4em")
      .attr("x", d => d.children ? -12 : 12)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.translation || "")
      .attr("class", "text-[10px] fill-slate-500 font-sans uppercase tracking-wider")
      .style("font-family", "'Inter', sans-serif");


  }, [data, dimensions, onNodeSelect]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] bg-[#fdfbf7]">
      <svg ref={svgRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-4 left-4 text-slate-400 text-xs select-none pointer-events-none">
        Use scroll to zoom • Drag to pan • Click nodes for details
      </div>
    </div>
  );
};

export default TreeVisualization;
