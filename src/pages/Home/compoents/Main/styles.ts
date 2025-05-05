import { LuCircle, LuTrash2 } from 'react-icons/lu'
import { TbCircleCheckFilled } from 'react-icons/tb'
import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
`

export const NewTaskForm = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-top: -1.6875rem;

  input {
    flex: 1;
    padding: 1rem;
    background: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    outline: none;
    border-radius: 8px;

    ::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }

    &:focus {
      border-color: ${(props) => props.theme['purple-dark']};
      transition: border-color 0.2s;
    }

  }

  button {
    padding: 1rem;
    background: ${(props) => props.theme['blue-dark']};
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    outline: none;

    &:hover {
      background: ${(props) => props.theme.blue};
      transition: background-color 0.2s;
    }

  }
`

export const TaskListContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 0 2rem;
`

export const TaskListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const TaskListHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
  }

  span {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const TaskList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface TaskListItemProps {
	isCompleted: boolean
}

export const TaskListItem = styled.li<TaskListItemProps>`
  background: ${(props) => props.theme['gray-500']};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  
  ${({ isCompleted, theme }) =>
		isCompleted
			? `
        color: ${theme['gray-300']}; 
        text-decoration: line-through;
        &:hover span:nth-of-type(1) > svg {
          fill: ${theme.purple};
          cursor: pointer;
        }
      `
			: `
        &:hover span:nth-of-type(1) > svg {
          color: ${theme['blue-dark']};
          cursor: pointer;
          fill: ${theme['blue-dark']};
          fill-opacity: 0.2;
        }
      `}
    
  span {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: start;
    justify-content: center;
  }

  label {
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    span {
      margin-top: 0.25rem;
    }
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;

    &:hover {
      background: ${(props) => props.theme['gray-400']};
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    &:hover svg {
      color: ${(props) => props.theme.danger};
    }
  }
`

export const IconCheckEmpty = styled(LuCircle)`
  color: ${(props) => props.theme.blue};
  width: 17px;
  height: 17px;
  
`

export const IconChecked = styled(TbCircleCheckFilled)`
  fill: ${(props) => props.theme['purple-dark']};
  width: 18px;
  height: 18px;
  :hover {
    fill: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const IconTrash = styled(LuTrash2)`
  color: ${(props) => props.theme['gray-300']};
  height: 14px;
`

export const TaskListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 0;
  color: ${(props) => props.theme['gray-300']};
  text-align: center;

  img {
    width: 56px;
    height: 56px;
  }

  strong {
    font-size: 1.125rem;
    font-weight: bold;
  }
`
