import { BugButton } from 'app/providers/ErrorBoundry';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;
