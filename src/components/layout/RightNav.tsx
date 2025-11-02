import { Dispatch, SetStateAction } from "react";
import { tv } from "tailwind-variants";

const link = tv({
    base: "block text-black p-5 font-medium hover:text-gray-500"
})

export default function RightNav({isVisible, setIsVisible}: {isVisible: boolean, setIsVisible: Dispatch<SetStateAction<boolean>>}) {
    return (
        isVisible ?
        <div onClick={(() => setIsVisible(false))} className="flex bg-black/30 w-full h-full fixed top-0 left-0 z-2 justify-end">
            <div className="h-full bg-white p-4 w-70 shadow-2xl">
                <a className={link()} href="#main">О Нас</a>
                <a className={link()} href="#catalogue">Каталог</a>
                <a className={link()} href="#contact">Оставить заявку</a>
                <a className={link()} href="/privacy-policy">Политика конфиденциальности</a>
                <a className={link()} href="/certificates">Сертификаты</a>
            </div>
        </div> : null
    )
}