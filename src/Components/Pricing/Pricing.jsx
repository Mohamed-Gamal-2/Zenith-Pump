import Plans from "../Plans/Plans";
import styles from "./Pricing.module.css";

const plans = [
  {
    id: 1,
    name: "Monthly Plan",
    price: "2800",
    keyFeatures: ["1 Inbody", "1 P.T", "2 Invitations"],
  },
  {
    id: 2,
    name: "Quarterly Plan",
    price: "4500",
    keyFeatures: [
      "2 Inbody",
      "2 P.T",
      "1 Nutrition Plan",
      "4 Invitations",
      "2 week freezing",
    ],
  },
  {
    id: 3,
    name: "Half a year Plan",
    price: "7000",
    keyFeatures: [
      "3 Inbody",
      "3 P.T",
      "2 Nutrition Plan",
      "6 Invitations",
      "4 week freezing",
    ],
  },
];
export default function Pricing() {
  return (
    <section id="pricing" className={`${styles.section} `}>
      <div className="md:container mx-auto py-32">
        <h2 className={`${styles.header} text-center`}>
          <span>Our</span> Prices
        </h2>
        <div className="mt-16 grid lg:grid-cols-3  grid-col-1 gap-10">
          {plans.map((plan) => (
            <Plans key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
