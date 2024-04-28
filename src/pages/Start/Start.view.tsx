import { memo } from "react";
import { difficultiesSelectItem } from "./Start.data";
import GradientHeading from "@/components/GradientHeading";
import GradientButton from "@/components/GradientButton";

const StartView: React.FC = () => (
    <main className="my-44">
        <section className="custom-container">
            <div className="flex flex-col items-center gap-4">
                {/* Header Text */}
                <GradientHeading text="TIC TAC TOE" />
                {/* Start Button */}
                <GradientButton label="Start" />
                {/* Difficulty Select */}
                <div className="flex flex-col items-center gap-4 mt-4">
                    <p className="text-gray-400 tracking-wider">Difficulty</p>
                    <div className="flex items-center gap-4">
                        {difficultiesSelectItem.map((item) => (
                            <div className="p-4 border border-gray-400 text-gray-400 rounded-lg text-sm cursor-pointer" key={item.key}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default memo(StartView);