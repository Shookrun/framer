import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const animal = [
  ["🐶", 340, 10],
  ["🐵", 20, 40],
  ["🐴", 60, 90],
  ["🐺", 80, 120],
  ["🦁", 100, 140],
  ["🦈", 205, 245],
  ["🪼", 260, 290],
  ["🐟", 290, 320],
];

export default function App() {
  return animal.map(([emoji, hueA, hueB]) => (
    <Card key={emoji} emoji={emoji} hueA={hueA} hueB={hueB} />
  ));
}
