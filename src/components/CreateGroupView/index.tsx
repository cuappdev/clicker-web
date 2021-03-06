import cx from 'classnames';
import React, { useState } from 'react';

import IconView from '../IconView';

import './styles.scss';

export interface CreateGroupViewProps {
    isCreatingGroup: boolean;
    onCreateButtonClick(name?: string): void;
    onDismiss(): void;
}

const CreateGroupView: React.FunctionComponent<CreateGroupViewProps> = ({
    isCreatingGroup,
    onCreateButtonClick,
    onDismiss,
}) => {
    const [name, setName] = useState<string | undefined>(undefined);

    const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.value;
        setName(name === '' ? undefined : name);
    };

    return (
        <div className="create-group-view-card">
            <div className="create-group-view-close-button-container">
                <button
                    className="create-group-view-close-button"
                    disabled={isCreatingGroup}
                    onClick={onDismiss}
                >
                    <IconView type="new-group-close" />
                </button>
            </div>
            <input
                className="create-group-view-name-input"
                onChange={onNameInputChange}
                placeholder="Enter a new group name..."
                type="text"
            />
            <div className="create-group-view-name-input-border" />
            <button
                className={cx(
                    'create-group-view-create-button',
                    name && name !== '' && 'enabled',
                )}
                disabled={name === undefined || name === '' || isCreatingGroup}
                onClick={() => onCreateButtonClick(name)}
            >
                <div className="create-group-view-create-button-text">
                    {isCreatingGroup ? 'Creating...' : 'Create'}
                </div>
            </button>
        </div>
    );
};

export default CreateGroupView;
