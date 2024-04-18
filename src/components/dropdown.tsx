import {ChevronDown} from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function Dropdown({
	label,
	dropdownMenu,
	icon,
}: {
	label: string;
	icon?: any;
	dropdownMenu: Array<object>;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-0 flex gap-2">
				<span className="lg:hidden">{icon}</span>
				<span className="flex items-center gap-1">
					{label} <ChevronDown />
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{dropdownMenu?.map((e: any, i) => (
					<div key={i}>
						<DropdownMenuItem>
							<Link
								href={e?.link}
								className="flex gap-3 lg:gap-4 items-center hover:text-primary-foreground"
							>
								{e.icon}
								<span className="">{e?.label}</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
					</div>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default Dropdown;
