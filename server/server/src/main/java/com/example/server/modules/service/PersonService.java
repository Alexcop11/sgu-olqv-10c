package com.example.server.modules.service;

import com.example.server.modules.model.Person;
import com.example.server.modules.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;
    @Autowired
    public PersonService(PersonRepository personRepository1) {
        this.personRepository = personRepository1;
    }

    public List<Person> List(){
        return personRepository.findAll();
    }

    public Optional<Person> findById(Long Id){
        return personRepository.findById(Id);
    }

    public Person save(Person person){
        return personRepository.save(person);
    }

    public Person update(Long id, Person persona) {
        return personRepository.findById(id).map(p -> {
            p.setName(persona.getName());
            p.setEmail(persona.getEmail());
            p.setPhoneNumber(persona.getPhoneNumber());
            return personRepository.save(p);
        }).orElseThrow(() -> new RuntimeException("Persona no encontrada"));
    }

    public void delete(Long id){
        personRepository.deleteById(id);
    }

}
