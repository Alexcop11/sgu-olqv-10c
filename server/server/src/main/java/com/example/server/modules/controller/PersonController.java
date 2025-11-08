package com.example.server.modules.controller;

import com.example.server.modules.model.Person;
import com.example.server.modules.repository.PersonRepository;
import com.example.server.modules.service.PersonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/api/persons")
@RestController
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public List<Person> findAll(){
        return personService.List();
    }

    @GetMapping("/{id}")
    public Person findById(@PathVariable Long id){
        return personService.findById(id).orElseThrow(() -> new RuntimeException("Person not found"));
    }

    @PostMapping
    public Person save(@RequestBody Person person){
        return personService.save(person);
    }

    @PutMapping
    public Person update(@RequestBody Person person) {
        if (person.getId() == null) {
            throw new IllegalArgumentException("ID requerido para actualizar");
        }
        return personService.update(person.getId(), person);
    }


    @DeleteMapping
    public void delete(@RequestBody Person person) {
        if (person.getId() == null) {
            throw new IllegalArgumentException("ID requerido para eliminar");
        }
        personService.delete(person.getId());
    }

}
