import { IsShowCreateModalAction } from '../../../../store/types/is-show-modal.types';
import {
    CreateIncidentAction,
    CreateIncidentActionPayload
} from '../../../../store/types/saga-incidents.types';

export interface CreateIncidentModalProps {
    isShowCreateModal: boolean;
    isShowCreateModalAction: () => IsShowCreateModalAction;
    createIncidentAction: (
        createIncidentArgs: CreateIncidentActionPayload
    ) => CreateIncidentAction;
}
