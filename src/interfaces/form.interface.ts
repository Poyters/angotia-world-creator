export interface IActionMaxMinField {
  label: string,
  inputType?: string
  minValue?: number,
  maxValue?: number,
  action?: Function
}

export interface IActionInputField {
  label: string,
  inputType?: string
  inputValue?: string | number
  inputDisabled?: boolean,
  action?: Function,
  payloadId?: string
}

export interface IChooseButtons {
  types: IChooseType[]
  action: Function
  label?: string
  specialClass?: string
  choosed?: string | boolean | number
}

export interface IChooseType {
  label: string
  id: string | boolean | number
}