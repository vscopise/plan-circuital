'use client';

export const SearchForm = () => {
    return (
        <>
            <p>Serie</p>
            <input 
                name="serie" 
                type="text"
                autoFocus 
                maxLength={3} 
                className="input-text" 
                placeholder="XXX"
            />
            <p>Número</p>
            <input 
                name="numero" 
                type="tel"
                pattern="[0-9]{5}"
                placeholder="XXXXX"
                className="input-text" 
            />
            <div className="text-2xl">Complete los datos para obtener la ubicación del local</div>
        </>
    )
}
