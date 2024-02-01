import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import SlideIn from '~/components/modules/animations/slidein';

const Grid = forwardRef((props, ref) => {
	const {
		as = 'div',
		children,
		className,
		autoRows = true,
		columns = 'md:grid-cols-2',
		gap = 'gap-12 lg:gap-16',
		...rest
	} = props;

	const Container = as;

	return (
		<SlideIn>
			<Container
				ref={ref}
				className={twMerge(
					'grid',
					gap,
					autoRows ? 'auto-rows-min' : '',
					'grid-cols-1',
					columns,
					className ?? ''
				)}
				{...rest}
			>
				{children}
			</Container>
		</SlideIn>
	);
});

export const GridItem = ({
	as = 'div',
	children,
	className
}) => {
	const Container = as;

	return (
		<Container
			className={className ?? ''}
		>
			{children}
		</Container>
	);
};

Grid.Item = GridItem;

Grid.displayName = 'Grid';
export default Grid;
