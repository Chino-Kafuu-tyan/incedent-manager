import { IncidentData } from '../../../../store/types/incidents.types';
import { IsShowEditModalAction } from '../../../../store/types/is-show-modal.types';
import {
    EditIncidentActionPayload,
    EditIncidentAction
} from '../../../../store/types/saga-incidents.types';

export interface EditIncidents extends IncidentData {}

export interface EditIncidentModalProps {
    editableIncident?: Partial<EditIncidents>;
    resetEditableIncident: (editableIncident: Partial<EditIncidents>) => void;
    IsShowEditModal: boolean;
    isShowEditModalAction: () => IsShowEditModalAction;
    editIncidentAction: (
        editIncidentArgs: EditIncidentActionPayload
    ) => EditIncidentAction;
}
