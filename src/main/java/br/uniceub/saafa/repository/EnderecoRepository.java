package br.uniceub.saafa.repository;

import br.uniceub.saafa.domain.Endereco;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Endereco entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

}
