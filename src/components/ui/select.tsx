import React, { SelectHTMLAttributes, OptionHTMLAttributes, forwardRef } from 'react'

// Props for Select component
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

// Main Select component that renders a standard <select>
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <select ref={ref} {...props}>
        {children}
      </select>
    )
  }
)

Select.displayName = 'Select'

// SelectContent just wraps children, it could be used for additional styling or functionality if needed
export const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>

// Option for each item inside the select dropdown, we fix type here
export const SelectItem = ({
  children,
  ...props
}: OptionHTMLAttributes<HTMLOptionElement>) => <option {...props}>{children}</option>

// SelectTrigger is the select component itself, can be customized later if needed
export const SelectTrigger = Select

// SelectValue is used to display the selected value, we could add more logic here if needed
export const SelectValue = ({ children }: { children: React.ReactNode }) => <>{children}</>
