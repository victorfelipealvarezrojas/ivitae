
interface Props {
  customStile?: string;
  text: string
}

export const Text: React.FC<Props> = props => <div
  className={`${props.customStile}`}>
  {props.text}
</div>