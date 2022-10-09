import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Professor 1',
      photo: "https://github.com/eloilsondosanjos.png",
      description: "Aula de programação e gerenciamento de projetos 1",
      value: 150
    },
    {
      id: 2,
      name: 'Professor 2',
      photo: "https://github.com/eloilsondosanjos.png",
      description: "Aula de programação e gerenciamento de projetos 2",
      value: 120
    },
    {
      id: 3,
      name: 'Professor 3',
      photo: "https://github.com/eloilsondosanjos.png",
      description: "Aula de programação e gerenciamento de projetos 3",
      value: 140
    },
    {
      id: 4,
      name: 'Professor 4',
      photo: "https://github.com/eloilsondosanjos.png",
      description: "Aula de programação e gerenciamento de projetos 4",
      value: 180
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
