import { BlockState } from '../core'
import { Json } from '../util'
import type { SimpleNoiseRouter } from './NoiseRouter'
import { NoiseRouter } from './NoiseRouter'
import { NoiseSettings } from './NoiseSettings'
import { SurfaceRule } from './SurfaceSystem'

export interface NoiseGeneratorSettings {
	noise: NoiseSettings,
	surfaceRule: SurfaceRule,
	defaultBlock: BlockState,
	defaultFluid: BlockState,
	noiseRouter: SimpleNoiseRouter,
	bedrockRoofPosition: number,
	bedrockFloorPosition: number,
	seaLevel: number,
	disableMobGeneration: boolean,
	aquifersEnabled: boolean,
	noiseCavesEnabled: boolean,
	deepslateEnabled: boolean,
	oreVeinsEnabled: boolean,
	noodleCavesEnabled: boolean,
	legacyRandomSource: boolean,
}

export namespace NoiseGeneratorSettings {
	export function fromJson(obj: unknown): NoiseGeneratorSettings {
		const root = Json.readObject(obj) ?? {}
		return {
			surfaceRule: SurfaceRule.fromJson(root.surface_rule),
			noise: NoiseSettings.fromJson(root.noise),
			defaultBlock: BlockState.fromJson(root.default_block),
			defaultFluid: BlockState.fromJson(root.default_fluid),
			noiseRouter: NoiseRouter.fromJson(root.noise_router),
			bedrockRoofPosition: Json.readInt(root.bedrock_roof_position) ?? 0,
			bedrockFloorPosition: Json.readInt(root.bedrock_floor_position) ?? 0,
			seaLevel: Json.readInt(root.sea_level) ?? 0,
			disableMobGeneration: Json.readBoolean(root.disable_mob_generation) ?? false,
			aquifersEnabled: Json.readBoolean(root.aquifers_enabled) ?? false,
			noiseCavesEnabled: Json.readBoolean(root.noise_caves_enabled) ?? false,
			deepslateEnabled: Json.readBoolean(root.deepslate_enabled) ?? false,
			oreVeinsEnabled: Json.readBoolean(root.ore_veins_enabled) ?? false,
			noodleCavesEnabled: Json.readBoolean(root.noodle_caves_enabled) ?? false,
			legacyRandomSource: Json.readBoolean(root.legacy_random_source) ?? false,
		}
	}
}
