type LanguageSwitcherProps = {
    setLanguage: (lang: string) => void;
}

export const LanguageSwitcher = ({setLanguage}: LanguageSwitcherProps) => {
    const setPolish = () => {
        setLanguage("pl")
    }
    const setEnglish = () => {
        setLanguage("en")
    }
    return (
        <div className="language-switcher">
            <span className="language-item" onClick={setPolish}>PL</span>
            <span className="language-item-divider"> | </span>
            <span className="language-item" onClick={setEnglish}>ENG</span>
        </div>
    )
}