import { FormInstance } from 'antd';
import { Moment } from 'moment';
import { IncidentDataBefore } from '../../../../store/types/incidents.types';
import { UserData } from '../../../../store/types/users.types';
import { EditIncidents } from '../edit-incident-modal/edit-incident-modal.types';

interface CommonIncidentFormProps {
    editableIncident?: Partial<EditIncidents>;
}
export interface IncidentModalFormProps extends CommonIncidentFormProps {
    visible: boolean;
    onCreate: (values: IncidentDataBefore) => void;
    onCancel: () => void;
    titleOfForm: string;
    okText: string;
    users: UserData[];
}
interface UserOptions {
    value: string;
}

export interface IncidentFormProps extends CommonIncidentFormProps {
    incidentPriority: string;
    userOptions: UserOptions[];
    form: FormInstance;
    getIncidentPriority: (priority: string) => void;
    getStartData: (data: Moment | any) => void;
    disabledDueDate: (data: Moment) => boolean;
    disabledStartDate: (data: Moment) => boolean;
}
