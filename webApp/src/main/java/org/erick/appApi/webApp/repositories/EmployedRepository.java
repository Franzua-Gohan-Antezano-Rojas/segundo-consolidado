package org.erick.appApi.webApp.repositories;

import org.erick.appApi.webApp.EmployeeModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployedRepository extends CrudRepository <EmployeeModel,Long> {

}
