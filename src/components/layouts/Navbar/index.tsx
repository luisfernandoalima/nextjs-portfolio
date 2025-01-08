import Link from "next/link"

export const Navbar = () => {
    return(
        <ul className="flex items-center justify-center gap-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/projects"}>Projects</Link></li>
            <li>Idioma</li>
            <li>Mudar tema</li>
        </ul>
    )
}