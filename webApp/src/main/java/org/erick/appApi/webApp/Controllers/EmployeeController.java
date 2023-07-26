package org.erick.appApi.webApp.Controllers;

import org.erick.appApi.webApp.EmployeeModel;
import org.erick.appApi.webApp.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/empleados")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping()
    public ArrayList<EmployeeModel> obtenerEmpleados(){
        return employeeService.obtenerEmpleados();
    }

    @GetMapping(path = "/{id}")
    public Optional<EmployeeModel> obtenerEmpleado(@PathVariable ("id")Long id){
        return employeeService.obtenerEmpleado(id);
    }

    @PostMapping()
    public EmployeeModel guardarEmpleado(@RequestBody EmployeeModel employeeModel){
        return employeeService.guardarEmpleado(employeeModel);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarEmpleado(@PathVariable ("id") Long id){
        boolean eliminado=employeeService.eliminarEmpleado(id);
        if (eliminado){
            return "Eliminado correctamente";
        }else {
            return "No se pudo eliminar";
        }
    }
}
