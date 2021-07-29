<template>
  <div>
    <b-modal :id="id">
      <template #modal-header>
        <div>
          <h5 class="modal-title">Opções de Pagamento</h5>
        </div>
      </template>
      <div class="modal-body">
        <dl class="row">
          <dt class="col-sm-3">QR CODE PIX</dt>
          <dd class="col-sm-9">
            <img
              src="@/assets/images/page-img/qrpix.jpg"
              class="mr-3 avatar-150 img-fluid rounded"
              alt="QR Code do Pix"
            >
          </dd>
          <dt class="col-sm-3">Chave Pix CNPJ</dt>
          <dd class="col-sm-9">05.194.398/0001-68</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
          <dt class="col-sm-3">Sicoob</dt>
          <dd class="col-sm-9">AG: 3337 C.C: 72-8</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
          <dt class="col-sm-3">Bradesco</dt>
          <dd class="col-sm-9">AG: 0457 C.C: 43403-5</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
          <dt class="col-sm-3">Caixa</dt>
          <dd class="col-sm-9">AG: 1824 OP: 003 C.C: 2012-2</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
          <dt class="col-sm-3">Jicredi</dt>
          <dd class="col-sm-9">AG: 0002-7 C.C: 34944-5</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
          <dt class="col-sm-3">Santander</dt>
          <dd class="col-sm-9">AG: 1941 C.C: 13000030-4</dd>
          <dt class="col-sm-3"></dt>
          <dd class="col-sm-9"></dd>
        </dl>
      </div>
      <template #modal-footer>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$bvModal.hide('pagamentoModal')"
          >
            Fechar
          </button>
          <a
            href=" https://wa.me/+5569996079152?text=Eu%20Gostaria%20de%20enviar%20comprovante%20de%20pagamento"
            target="_blank"
            class="btn btn-success"
          >
            Enviar Comprovante
          </a>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'partials.modalPix',
  props: {
    id: String
  }
}
</script>