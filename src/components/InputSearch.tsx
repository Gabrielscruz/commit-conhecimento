'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { debouncedFn } = useDebounce();

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/?search=${term}`);
    } else {
      router.push(`/`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debouncedFn(() => handleSearch(e.target.value), 500);
  };

  return (
    <div className="flex items-center p-2 border rounded">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar..."
        className='bg-transparent outline-none'
      />
      <Search size={24} className="ml-2" />
    </div>
  );
};

export default SearchComponent;
