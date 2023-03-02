import { BugButton } from 'app/providers/ErrorBoundry';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;
