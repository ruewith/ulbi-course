import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h2 data-testid="value-title">{counterValue}</h2>
            <Button data-testid="increment-btn" onClick={increment}>
                {t('+')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t('-')}
            </Button>
        </div>
    );
};
