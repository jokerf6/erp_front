import FormItemLabel from "./FormItemLabel.component"
import FormItemPriority from "./FormItemPriority.component"
import FormItemInput from "./FormItemInput.component"

export default function FormItem({children}:any) {
  return (
    <div className="flex  flex-col gap-1">
      {children}
    </div>
  )
}

FormItem.Label = FormItemLabel
FormItem.Priority = FormItemPriority
FormItem.Input = FormItemInput