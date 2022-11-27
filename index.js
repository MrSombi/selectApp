import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    placeholder: 'Выбери пожалуйста элемент',
    selectedId: '4',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'React1'},
        {id: '3', value: 'React2'},
        {id: '4', value: 'Выбор по умолчанию'},
        {id: '5', value: 'React4'},
        {id: '6', value: 'React5'},
        {id: '7', value: 'React6'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})
