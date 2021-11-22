const noSpaceDecorator =
	(value) =>
	({ withSpace }) =>
		withSpace ? value : 0;

export default noSpaceDecorator;
