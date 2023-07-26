package org.erick.appApi.webApp.services;

import org.erick.appApi.webApp.EmployeeModel;
import org.erick.appApi.webApp.repositories.EmployedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployedRepository employedRepository;

    public ArrayList<EmployeeModel> obtenerEmpleados(){
        return (ArrayList<EmployeeModel>) employedRepository.findAll();

    }

    public Optional<EmployeeModel> obtenerEmpleado(Long id){
        return employedRepository.findById(id);
    }

    public EmployeeModel guardarEmpleado(EmployeeModel employeeModel){
        return employedRepository.save(employeeModel);
    }

    public boolean eliminarEmpleado(Long id){
        try{
            employedRepository.deleteById(id);
            return true;
        }catch (Exception error){
            return false;
        }

    }
}
