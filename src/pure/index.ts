// shadcn/UI primitives — namespaced to avoid collision (Root, Content, Trigger, etc.)
export * as Button from "./button/index.js";
export * as Card from "./card/index.js";
export * as Badge from "./badge/index.js";
export * as Dialog from "./dialog/index.js";
export * as DropdownMenu from "./dropdown-menu/index.js";
export * as Tooltip from "./tooltip/index.js";
export * as Popover from "./popover/index.js";
export * as Tabs from "./tabs/index.js";
export * as Collapsible from "./collapsible/index.js";
export * as ScrollArea from "./scroll-area/index.js";
export * as Separator from "./separator/index.js";
export * as Input from "./input/index.js";
export * as Textarea from "./textarea/index.js";
export * as AlertDialog from "./alert-dialog/index.js";
export * as Resizable from "./resizable/index.js";

// Shared pure components — no naming conflicts
export { EmptyState } from "./empty-state/index.js";
export { ErrorDisplay } from "./error-display/index.js";
export { LoadingSpinner } from "./loading-spinner/index.js";
export { SearchInput } from "./search-input/index.js";
export { SelectMenu } from "./select-menu/index.js";
export { MetadataRow } from "./metadata-row/index.js";
export { SmallBadge } from "./small-badge/index.js";
export { PipelineStages } from "./pipeline-stages/index.js";
export type { PipelineStage, PipelineEdge } from "./pipeline-stages/index.js";
export { ThinkingBlock } from "./thinking-block/index.js";
export { ConfirmDialog } from "./confirm-dialog/index.js";
export { StatusBadge } from "./status-badge/index.js";

// Pattern abstractions
export { FormCard } from "./form-card/index.js";
export { ListCard } from "./list-card/index.js";
export { ProgressBar } from "./progress-bar/index.js";
export { ViewContainer } from "./view-container/index.js";
export { Toolbar } from "./toolbar/index.js";
export { NavItem } from "./nav-item/index.js";
