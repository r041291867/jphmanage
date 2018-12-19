<template>
	<div class="search">
		<v-layout row wrap>
			<v-spacer></v-spacer>
			<v-flex xs5 sm3>
				<v-text-field
					label="Regular"
					single-line
					prepend-inner-icon="search"
				></v-text-field>
			</v-flex>
			<v-btn>搜索</v-btn>
			<v-btn>导出excel</v-btn>
		</v-layout>
	</div>
</template>