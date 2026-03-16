/**
 * Icon utilities — used internally by the Icon component
 * and exported for consumers needing consistent icon resolution.
 */

import type { Component } from "svelte";
import CircleIcon from "@lucide/svelte/icons/circle";
import CompassIcon from "@lucide/svelte/icons/compass";
import CircleDotIcon from "@lucide/svelte/icons/circle-dot";
import CircleDotDashedIcon from "@lucide/svelte/icons/circle-dot-dashed";
import CircleStarIcon from "@lucide/svelte/icons/circle-star";
import CircleUserRoundIcon from "@lucide/svelte/icons/circle-user-round";
import CircleCheckBigIcon from "@lucide/svelte/icons/circle-check-big";
import CirclePauseIcon from "@lucide/svelte/icons/circle-pause";
import CircleStopIcon from "@lucide/svelte/icons/circle-stop";
import CircleMinusIcon from "@lucide/svelte/icons/circle-minus";
import CircleFadingArrowUpIcon from "@lucide/svelte/icons/circle-fading-arrow-up";
import ArchiveIcon from "@lucide/svelte/icons/archive";
import FileTextIcon from "@lucide/svelte/icons/file-text";
import ClipboardListIcon from "@lucide/svelte/icons/clipboard-list";
import UsersIcon from "@lucide/svelte/icons/users";
import ShieldIcon from "@lucide/svelte/icons/shield";
import FolderIcon from "@lucide/svelte/icons/folder";
import BookOpenIcon from "@lucide/svelte/icons/book-open";
import ZapIcon from "@lucide/svelte/icons/zap";
import TargetIcon from "@lucide/svelte/icons/target";
import LayersIcon from "@lucide/svelte/icons/layers";
import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
import FlaskConicalIcon from "@lucide/svelte/icons/flask-conical";
import ScrollTextIcon from "@lucide/svelte/icons/scroll-text";
import GitBranchIcon from "@lucide/svelte/icons/git-branch";
import BotIcon from "@lucide/svelte/icons/bot";
import CheckSquareIcon from "@lucide/svelte/icons/check-square";
import CodeIcon from "@lucide/svelte/icons/code";
import LayoutIcon from "@lucide/svelte/icons/layout";
import PaletteIcon from "@lucide/svelte/icons/palette";
import BrainIcon from "@lucide/svelte/icons/brain";
import PackageIcon from "@lucide/svelte/icons/package";
import FlagIcon from "@lucide/svelte/icons/flag";
import ShieldCheckIcon from "@lucide/svelte/icons/shield-check";
import RocketIcon from "@lucide/svelte/icons/rocket";
import WorkflowIcon from "@lucide/svelte/icons/workflow";
import NetworkIcon from "@lucide/svelte/icons/network";
import SettingsIcon from "@lucide/svelte/icons/settings";
import SearchIcon from "@lucide/svelte/icons/search";
import LayoutDashboardIcon from "@lucide/svelte/icons/layout-dashboard";
import GraduationCapIcon from "@lucide/svelte/icons/graduation-cap";
import ScaleIcon from "@lucide/svelte/icons/scale";

/** Default icon registry — maps string keys to Lucide icon components. */
export const DEFAULT_ICON_MAP: Record<string, Component> = {
	// Status icons
	circle: CircleIcon,
	compass: CompassIcon,
	"circle-dot": CircleDotIcon,
	"circle-dot-dashed": CircleDotDashedIcon,
	"circle-star": CircleStarIcon,
	"circle-user-round": CircleUserRoundIcon,
	"circle-check-big": CircleCheckBigIcon,
	"circle-pause": CirclePauseIcon,
	"circle-stop": CircleStopIcon,
	"circle-minus": CircleMinusIcon,
	"circle-fading-arrow-up": CircleFadingArrowUpIcon,
	archive: ArchiveIcon,

	// Artifact type icons
	"file-text": FileTextIcon,
	"clipboard-list": ClipboardListIcon,
	users: UsersIcon,
	shield: ShieldIcon,
	folder: FolderIcon,
	"book-open": BookOpenIcon,
	zap: ZapIcon,
	target: TargetIcon,
	layers: LayersIcon,
	lightbulb: LightbulbIcon,
	"flask-conical": FlaskConicalIcon,
	"scroll-text": ScrollTextIcon,
	"git-branch": GitBranchIcon,
	bot: BotIcon,
	"check-square": CheckSquareIcon,
	code: CodeIcon,
	layout: LayoutIcon,
	palette: PaletteIcon,
	brain: BrainIcon,
	package: PackageIcon,
	flag: FlagIcon,
	"shield-check": ShieldCheckIcon,
	rocket: RocketIcon,
	workflow: WorkflowIcon,
	network: NetworkIcon,
	settings: SettingsIcon,
	search: SearchIcon,
	"layout-dashboard": LayoutDashboardIcon,
	"graduation-cap": GraduationCapIcon,
	scale: ScaleIcon,
};

/**
 * Resolve an icon name to a Lucide component.
 * Checks the custom registry first (if provided), then the default map.
 */
export function resolveIcon(
	name: string | undefined,
	customRegistry?: Record<string, Component>,
): Component {
	if (!name) return CircleIcon;
	if (customRegistry && name in customRegistry) return customRegistry[name];
	if (name in DEFAULT_ICON_MAP) return DEFAULT_ICON_MAP[name];
	return CircleIcon;
}
