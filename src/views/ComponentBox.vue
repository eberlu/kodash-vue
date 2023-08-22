<template>

	<div class="grid grid-cols-1 lg:grid-cols-2">

		<Box>

			<template #header>

				<BoxTitle title="My box title component" />

			</template>

			<div class="grid grid-cols-1 gap-2">

				<p>This is a content paragraph inside the box.</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac dapibus nisi. Mauris dictum lectus sem, vitae tempor eros malesuada vitae. Phasellus tristique felis sed lorem congue viverra. Sed volutpat, nisi eu vehicula tincidunt, sem dolor porta dolor, in efficitur lectus enim sit amet urna. Praesent sit amet eros mi. Fusce efficitur arcu neque, vitae laoreet tortor sodales id. Donec sollicitudin eu odio feugiat convallis. Aliquam ultrices vulputate ultricies. Nunc vehicula ante a ornare vulputate. Praesent quis tincidunt tellus. Donec vehicula porttitor bibendum.
				</p>

			</div>

			<template #footer>

				<p>This is a slot footer paragraph.</p>

			</template>

		</Box>

	</div>

</template>