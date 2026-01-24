import { useEffect } from "react";

type UseOutClickProps = {
    ref: React.RefObject<HTMLElement | null>;
    menu: React.RefObject<HTMLElement | null>;
    func: () => void;
};

export const useOutClick = ({ ref, menu, func }: UseOutClickProps) => {

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node) && !menu.current?.contains(e.target as Node)) {
                func();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, func])
}