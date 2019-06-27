import React, { createContext, useContext } from "react";
import { Col, Form } from "antd";

export const Action = {
  view: "view",
  edit: "edit",
  cancel: "cancel",
  save: "save"
};

export const ModeContext = createContext(Action.view);

const FormItem = Form.Item;

export default function EditableItem(props) {
  const {
    label,
    viewContent = "暂无数据",
    className,
    style,
    children,
    disabled,
    span,
    ...restProps
  } = props;
  const mode = useContext(ModeContext);
  const defaultSpan = span ? { span } : { xs: 24, md: 12, lg: 8, xl: 6 };
  return (
    <Col {...defaultSpan} className={className} style={style} {...restProps}>
      <FormItem label={label}>
        {mode === Action.edit && !disabled ? children : viewContent}
      </FormItem>
    </Col>
  );
}
