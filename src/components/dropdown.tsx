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
}: {
	label: string;
	dropdownMenu: Array<object>;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-0">
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
								className="hover:text-primary-foreground"
							>
								{e?.label}
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