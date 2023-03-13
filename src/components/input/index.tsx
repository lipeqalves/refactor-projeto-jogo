import { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "../../context/context"
import { Button } from "../button"
import { Form, Content } from "./styles"

export const Input = () => {

const { handler } = useContext(GlobalContext)

const [resposta, setResposta] = useState<string>("")

  const handlerResposta = (e: FormEvent) => {
    e.preventDefault()
    handler(resposta)
  }

  return(
    <Form action="" onSubmit={handlerResposta}>
      <Content>

      <label htmlFor="">Escolha sua resposta</label>

      <select name="choice" value={resposta} onChange = {e =>  setResposta(e.target.value)}>
        <option className="option" value="" >none</option>
        <option value="a" >a</option>
        <option value="b">b</option>
        <option value="c" >c</option>
        <option value="d">d</option>
        <option value="e" >e</option>
      </select>
      </Content>
      <div>
      <Button name={"Responder"} type="submit" />
      </div>
    </Form>
  )

}
