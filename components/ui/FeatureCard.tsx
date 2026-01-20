import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    className,
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-secondary/50 p-6 border border-white/5 transition-all hover:bg-secondary/80 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10",
                className
            )}
        >
            <div className="absolute top-0 right-0 -m-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
            </div>

            <h3 className="mb-2 text-xl font-bold font-heading text-slate-100">
                {title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
