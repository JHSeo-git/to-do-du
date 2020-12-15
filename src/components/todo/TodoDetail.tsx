import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import useFocus from 'lib/hooks/common/useFocus';
import useConfirm from 'lib/hooks/common/useConfirm';
import useTodoState from 'lib/hooks/redux/todos/useTodoState';
import useDeleteTodo from 'lib/hooks/redux/todos/useDeleteTodo';
import useSelectedTodo from 'lib/hooks/redux/todos/useSelectedTodo';
import useUpdateTodoDetail from 'lib/hooks/redux/todos/useUpdateTodoDetail';
import useUpdateTodoItem from 'lib/hooks/redux/todos/useUpdateTodoItem';
import { debounce } from 'lib/common';
import { whiteBox } from 'styles/lib/common';
import { CloseIcon, DeleteIcon } from 'styles/lib/Icon';
import { fadeInWithDelay } from 'styles/lib/animation';
import TodoCircleButton from './TodoCircleButton';

const TodoDetailWrapper = styled.div`
  height: 100%;
  background: ${(props) => props.theme.grayLightColor};
  padding: ${(props) => props.theme.space[1]};
  width: 18rem;
  position: relative;
`;

const Inner = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const TodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]};
  position: sticky;
  top: 0;
  margin-bottom: ${(props) => props.theme.space[2]};
  ${whiteBox};
  border: 1px solid ${(props) => props.theme.grayLightColor};
`;

const TodoTitle = styled.input`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes[3]};
  padding: ${(props) => props.theme.space[0]};
  margin-left: ${(props) => props.theme.space[0]};
  border: 1px solid transparent;
  &:hover {
    background: ${(props) => props.theme.grayLightColor};
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.grayColor};
  }
`;

const TodoRow = styled.div<{ $hoverType?: boolean; $isFocus?: boolean }>`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  margin-bottom: ${(props) => props.theme.space[2]};
  ${whiteBox};
  border: 1px solid ${(props) => props.theme.grayLightColor};
  transition: all 0.1s linear;
  ${(props) =>
    props.$hoverType &&
    css`
      &:hover {
        border: 1px solid ${(props) => props.theme.grayColor};
      }
    `}
  ${(props) =>
    props.$isFocus &&
    css`
      border: 1px solid ${(props) => props.theme.grayColor};
    `}
`;

const TodoRowFlexCol = styled(TodoRow)`
  flex-direction: column;
`;

const TodoContent = styled.textarea`
  flex: 1;
  height: auto;
  min-height: ${(props) => props.theme.space[8]};
  font-size: ${(props) => props.theme.fontSizes[2]};
  line-height: 1.5;
  tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  height: 100%;
`;

const TodoUpdatedAt = styled.span`
  font-size: ${(props) => props.theme.fontSizes[2]};
  color: ${(props) => props.theme.primaryDarkColor};
  ${fadeInWithDelay(500)}
`;

const TodoValue = styled.span`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes[2]};
`;

const FixedFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: inherit;
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.grayColor};
`;

const FooterCol = styled.div`
  display: flex;
  align-items: center;
`;

const CreateDate = styled.span`
  font-size: ${(props) => props.theme.fontSizes[2]};
  text-align: center;
  color: ${(props) => props.theme.grayDarkColor};
`;

const TodoDetail = () => {
  const todoState = useTodoState();
  const deleteTodo = useDeleteTodo();
  const setDetail = useSelectedTodo();
  const updateTodoItem = useUpdateTodoItem();
  const updateTodoDetail = useUpdateTodoDetail();

  const confirm = useConfirm();
  const [focus, onFocus, onBlur] = useFocus();

  const onDeleteClick = (id: string | undefined) => {
    if (!id) return;
    confirm('Confirm delete', () => deleteTodo(id));
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { selectedTodo } = todoState;
    if (!selectedTodo) return;
    const id = selectedTodo.id;
    const {
      target: { name, value },
    } = e;
    updateTodoDetail({ id, name, value });
    debounce(() => updateTodoItem({ id, name, value, reload: true }));
  };

  const onRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { selectedTodo } = todoState;
    if (!selectedTodo) return;
    const id = selectedTodo.id;
    const {
      target: { name, value },
    } = e;
    updateTodoDetail({ id, name, value });
  };

  const onComplete = (id?: string, value?: boolean) => {
    if (!id) return;
    const doneItem: { id: string; name: string; value: any } = {
      id,
      name: 'done',
      value: !value,
    };
    updateTodoItem({ ...doneItem, reload: true });
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const { selectedTodo } = todoState;
      if (!selectedTodo) return;
      const id = selectedTodo.id;
      const {
        currentTarget: { name, value },
      } = e;
      updateTodoItem({ id, name, value, reload: true });

      e.currentTarget.blur();
    }
  };

  return (
    <>
      {todoState?.selectedTodo && (
        <TodoDetailWrapper>
          <Inner>
            <TodoInputWrapper>
              <TodoCircleButton
                isDone={todoState.selectedTodo.done?.value}
                onClick={() =>
                  onComplete(todoState.selectedTodo?.id, todoState.selectedTodo?.done?.value)
                }
              />
              <TodoTitle
                placeholder=""
                name="title"
                value={todoState.selectedTodo.title ? todoState.selectedTodo.title.value : ''}
                onChange={onRegisterChange}
                onKeyPress={onKeyPress}
              />
            </TodoInputWrapper>
            <TodoRowFlexCol $hoverType={true} $isFocus={focus}>
              <TodoContent
                name="content"
                value={todoState.selectedTodo.content ? todoState.selectedTodo.content.value : ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              {todoState.selectedTodo.content?.updatedAt && (
                <TodoUpdatedAt>
                  업데이트:
                  {moment(todoState.selectedTodo.content.updatedAt).format(' MM월DD일 HH시mm분')}
                </TodoUpdatedAt>
              )}
            </TodoRowFlexCol>
            <TodoRow>
              <TodoValue>타겟 Date{todoState.selectedTodo.targetDate}</TodoValue>
            </TodoRow>
          </Inner>
          <FixedFooter>
            <FooterCol>
              <CloseIcon size="20" onClick={() => setDetail()} />
            </FooterCol>
            <FooterCol>
              <CreateDate>
                {todoState.selectedTodo.done?.value
                  ? moment(todoState.selectedTodo.done.updatedAt).format('MM월DD일 HH시 에 완료됨')
                  : moment(todoState.selectedTodo.createdAt).format('MM월DD일 HH시 에 생성됨')}
              </CreateDate>
            </FooterCol>
            <FooterCol>
              <DeleteIcon size="20" onClick={() => onDeleteClick(todoState.selectedTodo?.id)} />
            </FooterCol>
          </FixedFooter>
        </TodoDetailWrapper>
      )}
    </>
  );
};

export default TodoDetail;
