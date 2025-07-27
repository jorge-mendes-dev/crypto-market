interface TabProps {
  tabs: {
    name: string;
    current: boolean;
  }[];
  setTab: (tab: { name: string; current: boolean }) => void;
}

export default function Tabs({ tabs, setTab }: TabProps): React.JSX.Element {
  return (
    <div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => setTab(tab)}
              className={` ${tab.current ? 'bg-indigo-800 text-indigo-200' : 'text-gray-500 hover:text-gray-700'} rounded-md border-b-2 px-5 py-4 text-sm font-medium ${tab.current ? 'border-indigo-500' : 'border-transparent'} `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
