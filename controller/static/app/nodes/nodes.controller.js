(function(){
	'use strict';

	angular
		.module('shipyard.nodes')
		.controller('NodesController', NodesController);

	NodesController.$inject = ['nodes', 'NodesService', '$state', '$timeout'];
	function NodesController(nodes, NodesService, $state, $timeout) {
            var vm = this;
            vm.nodes = nodes;
            vm.refresh = refresh;
			vm.zookeeper = zookeeper;//跳转到zookeeper界面
            vm.addNode = addNode;
            vm.removeNode = removeNode;
            vm.showAddNodeDialog = showAddNodeDialog;
            vm.showRemoveNodeDialog = showRemoveNodeDialog;
            vm.selectedNode = null;

            function showRemoveNodeDialog(node) {
                vm.selectedNode = node;
                $('.ui.small.remove.modal').modal('show');
            }

            function refresh() {
                NodesService.list()
                    .then(function(data) {
                        vm.nodes = data; 
                    }, function(data) {
                        vm.error = data;
                    });
                vm.error = "";
            }
			
			//zookeeper信息
			function zookeeper() {
				window.location.href='http://192.168.84.168:9090/home?zkPath=/swarm/docker/swarm/nodes';
			}
			
			function showAddNodeDialog(){
				 $('#add-node-modal').modal('show');
			}
            
			function addNode() {
                alert("Add Node Test...");
            }
			
			function showRemoveNodeDialog(){
				$('#remove-node-modal').modal('show');
			}
			
            function removeNode() {
                NodesService.removeNode(vm.selectedNode)
                    .then(function(data) {
                        vm.refresh();
                    }, function(data) {
                        vm.error = data;
                    });
            }

	}
})();
