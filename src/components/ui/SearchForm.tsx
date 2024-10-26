'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const SearchForm = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleFilter = useDebouncedCallback((term: string, field: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set(field, term);
        } else {
            params.delete(field);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <>
            <p>Serie</p>
            <input
                type="text"
                autoFocus
                maxLength={3}
                placeholder="XXX"
                className="input-text"
                onChange={(e) => handleFilter(e.target.value, 'serie')}
            />
            <p>Número</p>
            <input
                type="tel"
                pattern="[0-9]{5}"
                placeholder="XXXXX"
                className="input-text"
                onChange={(e) => handleFilter(e.target.value, 'numero')}
            />
        </>
    );
}
