import { LineageNode } from './types';

export const BUDDHISM_DATA: LineageNode = {
  name: "原始佛教",
  translation: "Original Buddhism",
  period: "5th Century BCE",
  description: "The original teachings of Shakyamuni Buddha before the major schisms. Focus on the Four Noble Truths and the Eightfold Path.",
  keyFigures: ["释迦牟尼佛 (Shakyamuni Buddha)", "十大弟子 (Ten Principal Disciples)"],
  color: "#d97706", // Amber-600
  children: [
    {
      name: "南传佛教",
      translation: "Southern Buddhism (Theravāda)",
      description: "The 'School of the Elders'. It relies on the Pali Canon and emphasizes individual liberation (Arhatship) through meditation and strict monastic discipline.",
      locations: ["Sri Lanka", "Thailand", "Myanmar", "Cambodia", "Laos"],
      coreThemes: ["戒律 (Monastic Discipline)", "四念处 (Four Foundations of Mindfulness)", "Vipassana"],
      keyFigures: ["觉音尊者 (Buddhaghosa)", "阿那律 (Anuruddha)", "莫哥利普底沙 (Moggaliputtatissa)"],
      color: "#b45309", // Amber-700
      children: [
        {
            name: "巴利语系",
            translation: "Pali Tradition",
            description: "The lineage preserving the teachings in the Pali language.",
            keyFigures: ["觉音尊者 (Buddhaghosa)", "法护尊者 (Dhammapala)"],
            color: "#b45309"
        }
      ]
    },
    {
      name: "大乘佛教",
      translation: "Mahāyāna",
      description: "The 'Great Vehicle'. Emphasizes the Bodhisattva path—seeking enlightenment for the sake of all sentient beings. Focuses on compassion (Karuna) and wisdom (Prajna).",
      keyFigures: ["龙树菩萨 (Nagarjuna)", "无著菩萨 (Asanga)", "世亲菩萨 (Vasubandhu)"],
      color: "#be123c", // Rose-700
      children: [
        {
          name: "中观派",
          translation: "Madhyamaka (Middle Way)",
          description: "Founded by Nagarjuna. Focuses on Emptiness (Śūnyatā) and the Two Truths doctrine.",
          keyFigures: ["龙树 (Nagarjuna)", "提婆 (Aryadeva)", "月称 (Chandrakirti)"],
          color: "#be123c"
        },
        {
          name: "唯识派",
          translation: "Yogācāra (Mind-Only)",
          description: "Emphasizes that all phenomenal existence is fabricated by consciousness.",
          keyFigures: ["无著 (Asanga)", "世亲 (Vasubandhu)", "玄奘 (Xuanzang)"],
          color: "#be123c"
        },
        {
          name: "禅宗",
          translation: "Chán (Zen)",
          description: "Focuses on direct experience, meditation, and intuition rather than scripture.",
          keyFigures: ["菩提达摩 (Bodhidharma)", "惠能 (Huineng)", "临济义玄 (Linji Yixuan)", "道元 (Dogen)"],
          color: "#e11d48" // Rose-600
        },
        {
          name: "净土宗",
          translation: "Pure Land",
          description: "Focuses on devotion to Amitabha Buddha to be reborn in the Western Pure Land.",
          keyFigures: ["慧远 (Huiyuan)", "善导 (Shandao)", "法然 (Honen)", "亲鸾 (Shinran)"],
          color: "#e11d48"
        },
        {
          name: "华严宗",
          translation: "Huayan",
          description: "Based on the Avatamsaka Sutra. Emphasizes the interpenetration of all phenomena (Indra's Net).",
          keyFigures: ["杜顺 (Dushun)", "法藏 (Fazang)", "澄观 (Chengguan)"],
          color: "#9f1239" // Rose-800
        },
        {
          name: "天台宗",
          translation: "Tiantai",
          description: "Based on the Lotus Sutra. Classification of teachings and rigorous meditation practices.",
          keyFigures: ["智顗 (Zhiyi)", "最澄 (Saicho)"],
          color: "#9f1239"
        },
        {
          name: "三论宗",
          translation: "Sanlun",
          description: "The Three Treatise School, the East Asian form of Madhyamaka.",
          keyFigures: ["吉藏 (Jizang)", "僧朗 (Senglang)"],
          color: "#881337" // Rose-900
        },
        {
          name: "律宗",
          translation: "Vinaya School",
          description: "Focuses strictly on the monastic rules (Vinaya).",
          keyFigures: ["道宣 (Daoxuan)", "鉴真 (Jianzhen)"],
          color: "#881337"
        },
        {
          name: "密宗",
          translation: "Esoteric (Shingon/Tangmi)",
          description: "Esoteric lineages transmitted through East Asia.",
          keyFigures: ["金刚智 (Vajrabodhi)", "不空 (Amoghavajra)", "空海 (Kukai)"],
          color: "#4c0519" // Rose-950
        }
      ]
    },
    {
      name: "金刚乘",
      translation: "Vajrayāna",
      description: "The 'Diamond Vehicle'. Often associated with Tibetan Buddhism. Utilizes esoteric methods (mantra, mudra, mandala) to accelerate the path to enlightenment.",
      keyFigures: ["莲花生大士 (Padmasambhava)", "帝洛巴 (Tilopa)", "那洛巴 (Naropa)"],
      color: "#4338ca", // Indigo-700
      children: [
        {
          name: "藏传佛教",
          translation: "Tibetan Buddhism",
          coreThemes: ["密法 (Esoteric Practices)", "曼荼罗 (Mandalas)", "Guru Yoga"],
          keyFigures: ["赤松德赞 (Trisong Detsen)", "阿底峡 (Atisha)"],
          color: "#3730a3",
          children: [
            {
              name: "宁玛派",
              translation: "Nyingma (Red School)",
              description: "The oldest school. Key teaching: Dzogchen (Great Perfection).",
              keyFigures: ["莲花生 (Padmasambhava)", "龙钦巴 (Longchenpa)"],
              color: "#312e81"
            },
            {
              name: "噶举派",
              translation: "Kagyu (White School)",
              description: "Focuses on oral transmission and Mahamudra.",
              keyFigures: ["玛尔巴 (Marpa)", "密勒日巴 (Milarepa)", "冈波巴 (Gampopa)"],
              color: "#312e81"
            },
            {
              name: "萨迦派",
              translation: "Sakya (Variegated School)",
              description: "Known for scholarship and the 'Path and Fruit' (Lamdre) system.",
              keyFigures: ["萨迦班智达 (Sakya Pandita)", "八思巴 (Phagpa)"],
              color: "#312e81"
            },
            {
              name: "格鲁派",
              translation: "Gelug (Yellow School)",
              description: "The newest school, founded by Tsongkhapa. Focuses on logic and debate.",
              keyFigures: ["宗喀巴 (Tsongkhapa)", "达赖喇嘛 (Dalai Lamas)"],
              color: "#312e81"
            }
          ]
        }
      ]
    },
    {
      name: "现代佛教",
      translation: "Modern Buddhism",
      description: "Contemporary movements adapting Buddhist teachings to modern society, science, and global ethics.",
      keyFigures: ["太虚大师 (Taixu)", "一行禅师 (Thich Nhat Hanh)", "达赖喇嘛 (14th Dalai Lama)"],
      color: "#15803d", // Green-700
      children: [
        {
          name: "人间佛教",
          translation: "Humanistic Buddhism",
          description: "Applying Buddhist teachings to improve this life and society, rather than just seeking rebirth.",
          keyFigures: ["太虚 (Taixu)", "印顺 (Yin Shun)", "星云 (Hsing Yun)", "圣严 (Sheng Yen)"],
          color: "#166534"
        },
        {
          name: "西方佛教",
          translation: "Western Buddhism",
          description: "Integration of Buddhism with Western psychology, philosophy, and secularism.",
          keyFigures: ["铃木大拙 (D.T. Suzuki)", "阿伦·瓦兹 (Alan Watts)", "杰克·康菲尔德 (Jack Kornfield)"],
          color: "#166534"
        },
        {
          name: "入世佛教",
          translation: "Engaged Buddhism",
          description: "Application of meditation and dharma to social, political, and environmental suffering.",
          keyFigures: ["一行禅师 (Thich Nhat Hanh)", "安贝卡博士 (B.R. Ambedkar)", "苏拉·西瓦拉克萨 (Sulak Sivaraksa)"],
          color: "#166534"
        }
      ]
    }
  ]
};