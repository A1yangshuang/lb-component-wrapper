import { Form } from 'antd'

export const { Item } = Form

const FIELD_META_PROP = 'data-__meta'
const FIELD_DATA_PROP = 'data-__field'
const VALUE = 'value'
const OPTIONS = 'options'
const CHECKED = 'checked'


export class SimpleFormItem extends Form.Item {
  shouldComponentUpdate(nextProps, nextState) {
    const currField = this.newGetField(this.props)
    const nextField = this.newGetField(nextProps)

    if (!currField || !nextField) {
      return true
    }

    const willChange = nextProps.willChange || []
    const changed = willChange.some(p => this.newGetChildProps(this.props, p) !== this.newGetChildProps(nextProps, p))

    return changed ||
      this.state.helpShow !== nextState.helpShow ||
      this.newGetChildProps(this.props, VALUE) !== this.newGetChildProps(nextProps, VALUE) ||
      this.newGetChildProps(this.props, OPTIONS) !== this.newGetChildProps(nextProps, OPTIONS) ||
      this.newGetChildProps(this.props, CHECKED) !== this.newGetChildProps(nextProps, CHECKED) ||
      currField.validating !== nextField.validating ||
      currField.value !== nextField.value ||
      currField.error !== nextField.error ||
      currField.initialValue !== nextField.initialValue
  }

  newGetChildProps = (props, prop) => {
    const child = this.getControls(props.children, false)[0]
    return child && child.props && child.props[prop]
  }

  newGetMeta = props => this.newGetChildProps(props, FIELD_META_PROP)

  newGetField = props => this.newGetChildProps(props, FIELD_DATA_PROP)
}

export default Form
