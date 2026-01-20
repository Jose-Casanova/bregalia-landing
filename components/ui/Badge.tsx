import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline" | "secondary";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        outline: "bg-transparent border-slate-700 text-slate-400",
        secondary: "bg-slate-800 text-slate-300 border-slate-700",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
