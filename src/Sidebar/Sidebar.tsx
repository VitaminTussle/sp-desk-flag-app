import React from 'react';
import { SidebarProps } from './types';

const options = [
    'Solid',
    'Pattern',
    'Custom'
];

const Sidebar = (data: SidebarProps) => {
    return (
        <div className='flex flex-col border-r border-solid border-slate-700 w-1/3 h-full p-4 gap-2'>
            {options.map(el => (
                <div
                    key={el}
                    className={'flex cursor-pointer rounded-lg px-2 py-1 ' + (data.selected === el ? 'bg-slate-300' : 'active:bg-slate-200 hover:bg-slate-100')}
                    onClick={() => data.onSelect(el)}
                >
                    <span>
                        {el}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;