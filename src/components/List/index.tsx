import { Button } from '@mui/material'
import { Teacher } from '../../@types/teacher'
import { Description, Info, ItemList, ListEmpty, ListStyled, Name, Photo, Value } from "./styles"

interface ListProps {
  teachers: Teacher[],
}

const List = (props: ListProps ) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
            <ListStyled>
            {props.teachers.map(teacher => (
              <ItemList key={teacher.id}>
                <Photo src={teacher.photo} />
                <Info>
                  <Name>{teacher.name}</Name>
                  <Value>{teacher.value.toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Value>
                  <Description>{teacher.description}</Description>
                  <Button sx={{ width: '70%', borderRadius: '4px' }}>Agendar Aula com {teacher.name}</Button>
                </Info>
              </ItemList>
          ))}
    
        </ListStyled>
      ) : <ListEmpty>Nenhum professor encontrado</ListEmpty> }
    </div>
  )
}

export default List;