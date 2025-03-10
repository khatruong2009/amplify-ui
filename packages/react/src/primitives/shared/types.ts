import { ComponentClassName } from '@aws-amplify/ui';

type ComponentNameKey =
  | 'Alert'
  | 'Autocomplete'
  | 'Badge'
  | 'Button'
  | 'Button'
  | 'Card'
  | 'Checkbox'
  | 'CheckboxField'
  | 'Collection'
  | 'PhoneNumberField'
  | 'Divider'
  | 'Expander'
  | 'FileUploader'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'HighlightMatch'
  | 'Icon'
  | 'Image'
  | 'Link'
  | 'Loader'
  | 'Menu'
  | 'Pagination'
  | 'PasswordField'
  | 'PhoneNumberField'
  | 'Placeholder'
  | 'Radio'
  | 'RadioGroupField'
  | 'Rating'
  | 'ScrollView'
  | 'SearchField'
  | 'Select'
  | 'SliderField'
  | 'SelectField'
  | 'StepperField'
  | 'StorageImage'
  | 'StorageManager'
  | 'SwitchField'
  | 'Table'
  | 'Tabs'
  | 'Text'
  | 'TextAreaField'
  | 'TextField'
  | 'ToggleButton'
  | 'ToggleButtonGroup'
  | 'VisuallyHidden';

type ComponentClassNameKey =
  | 'Alert'
  | 'AlertIcon'
  | 'AlertHeading'
  | 'AlertBody'
  | 'AlertDismiss'
  | 'Autocomplete'
  | 'AutocompleteMenu'
  | 'AutocompleteMenuEmpty'
  | 'AutocompleteMenuFooter'
  | 'AutocompleteMenuHeader'
  | 'AutocompleteMenuLoading'
  | 'AutocompleteMenuOption'
  | 'AutocompleteMenuOptions'
  | 'Badge'
  | 'Button'
  | 'ButtonGroup'
  | 'ButtonLoaderWrapper'
  | 'Card'
  | 'Checkbox'
  | 'CheckboxButton'
  | 'CheckboxIcon'
  | 'CheckboxInput'
  | 'CheckboxLabel'
  | 'CheckboxField'
  | 'Collection'
  | 'CollectionItems'
  | 'CollectionSearch'
  | 'CollectionPagination'
  | 'CountryCodeSelect'
  | 'DialCodeSelect'
  | 'Divider'
  | 'DividerLabel'
  | 'Expander'
  | 'ExpanderContent'
  | 'ExpanderContentText'
  | 'ExpanderHeader'
  | 'ExpanderIcon'
  | 'ExpanderItem'
  | 'ExpanderTrigger'
  | 'Field'
  | 'FieldDescription'
  | 'FieldErrorMessage'
  | 'FieldGroup'
  | 'FieldGroupControl'
  | 'FieldGroupOuterEnd'
  | 'FieldGroupOuterStart'
  | 'FieldGroupInnerEnd'
  | 'FieldGroupInnerStart'
  | 'FieldGroupIcon'
  | 'FieldGroupIconButton'
  | 'FieldGroupHasInnerEnd'
  | 'FieldGroupHasInnerStart'
  | 'FieldShowPassword'
  | 'FieldGroupFieldWrapper'
  | 'FileUploaderDropZone'
  | 'FileUploaderDropZoneIcon'
  | 'FileUploaderDropZoneText'
  | 'FileUploaderDropZoneButton'
  | 'FileUploaderFile'
  | 'FileUploaderFileWrapper'
  | 'FileUploaderFileName'
  | 'FileUploaderFileSize'
  | 'FileUploaderFileInfo'
  | 'FileUploaderFileStatus'
  | 'FileUploaderFileImage'
  | 'FileUploaderFileMain'
  | 'FileUploaderLoader'
  | 'FileUploaderPreviewer'
  | 'FileUploaderPreviewerText'
  | 'FileUploaderPreviewerBody'
  | 'FileUploaderPreviewerFooter'
  | 'FileUploaderPreviewerFooterActions'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'HighlightMatch'
  | 'HighlightMatchHighlighted'
  | 'Icon'
  | 'Image'
  | 'Input'
  | 'Label'
  | 'Link'
  | 'Loader'
  | 'LoaderDeterminate'
  | 'LoaderPercentageText'
  | 'MenuContent'
  | 'MenuContentWrapper'
  | 'MenuItem'
  | 'MenuTrigger'
  | 'Pagination'
  | 'PaginationItemButton'
  | 'PaginationItemCurrent'
  | 'PaginationItemEllipsis'
  | 'PasswordField'
  | 'PhoneNumberField'
  | 'Placeholder'
  | 'Radio'
  | 'RadioButton'
  | 'RadioInput'
  | 'RadioLabel'
  | 'RadioGroupField'
  | 'RadioGroup'
  | 'Rating'
  | 'ScrollView'
  | 'SearchField'
  | 'SearchFieldClear'
  | 'SearchFieldSearch'
  | 'Select'
  | 'SelectField'
  | 'SelectWrapper'
  | 'SelectIconWrapper'
  | 'SliderField'
  | 'SliderFieldGroup'
  | 'SliderFieldLabel'
  | 'SliderFieldRange'
  | 'SliderFieldRoot'
  | 'SliderFieldThumb'
  | 'SliderFieldTrack'
  | 'StepperField'
  | 'StepperFieldButtonDecrease'
  | 'StepperFieldButtonIncrease'
  | 'StepperFieldInput'
  | 'StorageImage'
  | 'StorageManager'
  | 'StorageManagerDropZone'
  | 'StorageManagerDropZoneIcon'
  | 'StorageManagerDropZoneText'
  | 'StorageManagerFilePicker'
  | 'StorageManagerFile'
  | 'StorageManagerFileWrapper'
  | 'StorageManagerFileList'
  | 'StorageManagerFileName'
  | 'StorageManagerFileSize'
  | 'StorageManagerFileInfo'
  | 'StorageManagerFileStatus'
  | 'StorageManagerFileImage'
  | 'StorageManagerFileMain'
  | 'StorageManagerLoader'
  | 'StorageManagerPreviewer'
  | 'StorageManagerPreviewerText'
  | 'SwitchField'
  | 'SwitchLabel'
  | 'SwitchThumb'
  | 'SwitchTrack'
  | 'SwitchWrapper'
  | 'Table'
  | 'TableCaption'
  | 'TableBody'
  | 'TableTd'
  | 'TableTh'
  | 'TableFoot'
  | 'TableHead'
  | 'TableRow'
  | 'Tabs'
  | 'TabItems'
  | 'Text'
  | 'Textarea'
  | 'TextAreaField'
  | 'TextField'
  | 'ToggleButton'
  | 'ToggleButtonGroup'
  | 'VisuallyHidden';

interface ComponentClassNameMetadata {
  className: ComponentClassName;
  components?: ComponentNameKey[];
  description?: string;
}

export type ComponentClassNameItems = {
  [Name in ComponentClassNameKey]: ComponentClassNameMetadata;
};

export type ComponentClassNames = {
  [Name in ComponentClassNameKey]: ComponentClassNameMetadata['className'];
};
