
class UserDto {

    async deserialize(payload1, payload2, payload3, payload4){
        const result = {
            id: parseInt(payload1.id),
            login: payload1.login,
            password: payload1.password,
            uirs_users_id: payload1.uirs_users_id,
            //payload2
            role: payload2.role_id,
            uirs_users_db_id: payload2.uirs_users_db_id,
            //payload3
            patient_id: payload3.patient_id,
            doctor_id: payload3.doctor_id,
            //payload4
            tabel_num: payload4.tabel_num,
            surname: payload4.surname,
            name: payload4.name,
            patronomic_name: payload4.patronomic_name,
            phone: payload4.phone,
            email: payload4.email,
            birth_date: payload4.birth_date,
            med_post_id: payload4.med_post_id,
            full_name: payload4.full_name,
            gender_id: payload4.gender_id,
        }
        return (result)
    }

    async deserializePatient(payload1, payload2, payload3, payload4) {
        const result = {
            id: parseInt(payload1.id),
            login: payload1.login,
            password: payload1.password,
            uirs_users_id: payload1.uirs_users_id,
            //payload2
            role: payload2.role_id,
            uirs_users_db_id: payload2.uirs_users_db_id,
            //payload3
            patient_id: payload3.patient_id,
            doctor_id: payload3.doctor_id,
            //payload4
            surname: payload4.surname,
            name: payload4.name,
            patronomic_name: payload4.patronomic_name,
            full_name: payload4.full_name,
            phone: payload4.phone,
            email: payload4.email,
            birth_date: payload4.birth_date,
            snils: payload4.snils,
            polis: payload4.polis,
            gender_id: payload4.gender_id,
            sp_district_id: payload4.sp_district_id,
            address: payload4.address,
            doc_id: payload4.doc_id
        }
        return (result)
    }
}

module.exports = new UserDto();